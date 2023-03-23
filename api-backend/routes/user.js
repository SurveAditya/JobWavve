const jwt = require("jsonwebtoken");
const router = require("express").Router();
const User = require("../models/User");
const Vacancy = require("../models/Vacancy");
const config = require("../config");
const bcrypt = require('bcrypt');
const user=require("../models/User");
const referral = require("../models/referral")
const saltRounds = 10;
const isUser = require("../middlewares/isUser");
const isAdmin = require("../middlewares/isAdmin");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey:"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"
});
const openai = new OpenAIApi(configuration);

//registering a new employee
router.post("/userregister", async (req, res) => {
	const password = req.body.password;
	const email=req.body.email;
	const firstname=req.body.firstname;
	const lastname=req.body.lastname;
	const confPassword=req.body.confPassword;
	const mobilenum=req.body.mobilenum;
	const experience=req.body.experience;
	const layoff=req.body.layoff;
	const jobTitle=req.body.jobTitle;
	const location=req.body.location;
	const skills = req.body.skills;
	const previousJobDesc=req.body.previousJobDesc;
	const admin=false;

	if (!password || !email || !firstname || !lastname || !confPassword || !mobilenum || !experience || !layoff || !jobTitle || !location || !skills || !previousJobDesc)
		return res.status(400).send("One or more of the fields are missing.");

	//checking for multiple accounts for a single email
	const emailcheck= await User.find({email:email});
	if(emailcheck.length >0) return res.status(400).send("Only one account per email address is allowed");

	if(password!=confPassword) return res.status(400).send("Password and Confirm Password do not match");

	// add user
	bcrypt.hash(password, saltRounds, async function(err, hash) {
		const newUser = new User({password:hash, firstname,lastname,email,mobilenum,admin,experience,layoff,jobTitle,location,skills,previousJobDesc });
		return res.json(await newUser.save());
	});
	
});
router.get("/test",async(req,res)=>{
	const data=await User.findById("640c52ca56202d250b991e79");
	let query=`i am being layedoff from my job and skill posses of ${data.skills} and experience of ${data.experience} years in ${data.jobTitle} and i am looking to get more knowledge in my field can you share some of the youtube or blog links to update myself`;
	// res.json(data);
	const completion =await openai.createCompletion({
		model: "text-davinci-003",
		prompt: generatePrompt(),
		temperature: 1,
		max_tokens:500
	  });
	//   completion.
	  console.log(completion.data.choices[0].text);
	//   let message=`✨Here is your answer✨ ${completion.data.choices[0].text}`
	//   client.sendMessage("120363073609347333@g.us", message);
	function generatePrompt() {
	const my=query
	  return `${my}`;
	}
})
router.post("/referral",isUser,async(req,res)=>{
	let refid=req.body.refid;
    const update={
        id:req.auth.user._id,
        message:req.body.message
    }
const result=await referral.findByIdAndUpdate(req.body.refid,{$push:{referral:update}},{new:true});
const update1={
    id:req.body.refid,
    message:req.body.message

}
const userupdate=await User.findByIdAndUpdate(req.auth.user.id,{$push:{referral:update1}},{new:true});
const result1=await referral.findByIdAndUpdate(refid,{$inc:{count:1}},{new:true});

const response=await referral.find().populate("referral.id");
res.json(response);




});
//user login
router.post("/userlogin", async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password)
		return res.status(400).send("Missing email or password");

	// checking if email exists
	const emails = await User.find({ email: email });
	if (emails.length === 0) return res.status(400).send("Email is incorrect");

	const user = emails[0];

	bcrypt.compare(password, user.password, async function(err, result) {
		if(result==false) return res.status(400).send("Incorrect password");

		// sending token
		const token =jwt.sign(
		{
			id: user._id,
		},
		config.jwtSecret,{expiresIn:"1d"}
		);
		res.setHeader("token", token);
		const name=user.firstname;
		res.json({ token,name });
	});
});

//registering a new employer
router.post("/employerregister", async (req, res) => {
	const password = req.body.password;
	const email=req.body.email;
	const firstname=req.body.firstname;
	const lastname=req.body.lastname;
	const confPassword=req.body.confPassword;
	const mobilenum=req.body.mobilenum;
	const admin=true;
	const location=req.body.location;
	const company=req.body.company;

	if (!password || !email || !firstname || !lastname || !confPassword || !mobilenum || !location || !company)
		return res.status(400).send("One or more of the fields are missing.");

	//checking for multiple accounts for a single email
	const emailcheck= await User.find({email:email});
	if(emailcheck.length >0) return res.status(400).send("Only one account per email address is allowed");

	if(password!=confPassword) return res.status(400).send("Password and Confirm Password do not match");

	// add user
	bcrypt.hash(password, saltRounds, async function(err, hash) {
		const newUser = new User({password:hash, firstname,lastname,email,mobilenum,admin,location,company });
		return res.json(await newUser.save());
	});
  
});

//posting job vacancies
router.post("/postjob",isAdmin, async (req, res) => {
	const title = req.body.title;
	const company=req.body.company;
	const location=req.body.location;
	const description=req.body.description;
	const responsibilities=req.body.responsibilities;
	const qualifications=req.body.qualifications;
	const skills=req.body.skills;
	const salary=req.body.salary;
	const benefits=req.body.benefits;
	const contactEmail=req.body.contactEmail;
	const creator = req.auth.user._id;
	const minexp = req.body.minexp;

	if (!title || !company || !location || !description || !responsibilities || !qualifications || !skills || !salary || !benefits || !contactEmail || !creator || !minexp)
		return res.status(400).send("One or more of the fields are missing.");
	
	// add job
	const newJob = new Vacancy({title,company,location,description,responsibilities,qualifications,skills,salary,benefits,contactEmail,creator ,minexp});
	await newJob.save();
	res.send({
        message: "Job Vacancy created successfully",
        success: true,
        data: null,
      });
});

//getting all job vacancies posted by the employer by id
router.get("/getjobs", isAdmin, async (req, res) => {
	const userId = req.auth.user._id;
	const jobs = await Vacancy.find({ creator: userId });
	res.json(jobs);
});


//recommend employee based on title skill and experience
router.post("/recommendemployee", isAdmin, async (req, res) => {
	const vacancyId = req.body.vacancyId;
  
	try {
	  //find the Vacancy by id
	  const vacancy = await Vacancy.findById(vacancyId).select('title skills minexp');
  
	  if (!vacancy) {
		return res.status(404).json({ msg: 'Vacancy not found' });
	  }
  
	  const title = vacancy.title;
	  const skills = vacancy.skills;
	  const minexp = vacancy.minexp;
  
	  const employees = await User.find({
		$and: [
		  { jobTitle: { $in: title } },
		  { skills: { $in: skills } },
		  { experience: { $gte: minexp } },
		]
	  });
  
	  res.json(employees);
	} catch (err) {
	  console.error(err.message);
	  res.status(500).send('Server Error');
	}
  });

  //recommend jobs based on title skill and experience
  router.get("/recommendjobs",isUser, async (req, res) => {
	const employeeId = req.auth.user._id;
  
	try {
	  // Find the employee by id
	  const employee = await User.findById(employeeId).select('jobTitle skills experience');
  
	  if (!employee) {
		return res.status(404).json({ msg: 'Employee not found' });
	  }
  
	  const jobTitle = employee.jobTitle;
	  const skills = employee.skills;
	  const experience = employee.experience;
  
	  // Find the jobs that match the employee's skills and require less experience than the employee has
	  const jobs = await Vacancy.find({
		$and: [
		  { title: { $in: jobTitle } },
		  { skills: { $in: skills } },
		  { minexp: { $lte: experience } },
		]
	  }).sort('-minexp').limit(5);
  
	  res.json(jobs);
	} catch (err) {
	  console.error(err.message);
	  res.status(500).send('Server Error');
	}
  });
  
		


	
	



module.exports = router;
