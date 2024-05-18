const {body,validationResult , param}=require('express-validator')

exports.validateHandler = (req,res,next)=>{
    const errors = validationResult(req);
    const errorMessages = errors.array().map((error)=>error.msg).join(", ");
    if(errors.isEmpty()) return next();
    else throw new Error(errorMessages);
}

exports.registerValidator = () => [
    body('name').notEmpty().withMessage('Please enter name'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').notEmpty().withMessage('Please enter password'),
    body('avatar').notEmpty().withMessage('Please enter avatar'),
    body('skills').notEmpty().withMessage('Please enter skills'),
    body('resume').notEmpty().withMessage('Please enter resume')
];

exports.loginValidator = () => [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').notEmpty().withMessage('Please enter password')
];

exports.changePasswordValidator = () => [
    body('oldPassword').notEmpty().withMessage('Please enter your old password'),
    body('newPassword').notEmpty().withMessage('Please enter a new password'),
    body('confirmPassword').notEmpty().withMessage('Please confirm your new password')
];

exports.updateProfileValidator = () => [
    body('newName').notEmpty().withMessage('Please enter your new name'),
    body('newEmail').isEmail().withMessage('Please enter a valid new email'),
    body('newAvatar').notEmpty().withMessage('Please enter your new avatar'),
    body('newResume').notEmpty().withMessage('Please enter your new resume'),
    body('newSkills').notEmpty().withMessage('Please enter your new skills')
];

exports.deleteAccountValidator = () => [
    body('password').notEmpty().withMessage('Please enter your password to delete your account')
];

exports.jobValidator = () => [
    body('title').notEmpty().withMessage('Please enter title'),
    body('description').notEmpty().withMessage('Please enter description'),
    body('companyName').notEmpty().withMessage('Please enter company name'),
    body('location').notEmpty().withMessage('Please enter location'),
    body('logo').notEmpty().withMessage('Please enter logo URL'),
    body('skillsRequired').notEmpty().withMessage('Please enter skills required'),
    body('experience').notEmpty().withMessage('Please enter experience'),
    body('salary').notEmpty().withMessage('Please enter salary'),
    body('category').notEmpty().withMessage('Please enter category'),
    body('employmentType').notEmpty().withMessage('Please enter employment type')
];

exports.JobIdValidator = ()=>[
    param("id","Please provide Job Id").notEmpty(),
]



exports.applicationIdValidator = ()=>[
    param("id","Please provide corect Application Id").notEmpty(),
]

exports.userIdValidator = ()=>[
    param("id","Please provide corect Application Id").notEmpty(),
]

