# Various status codes  available for differnt response ( check in screenshots)

# CoogleIt is a online tool used for mindmapping which is very helpful for architecting the application ( check attachment in the folder)

# check folder structure of backend once for refernce 

# Group methods in mongo models
   * In Mongo , while writing the methods we can group it in a   single  object. 
   * methods as single 
======================================
      userSchema.methods.autheticate: function(plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
     };
=====================================
   * methods as group 
======================================
      userSchema.methods = {
     autheticate: function(plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
     },

      securePassword: function(plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
       } catch (err) {
        return "";
           }
     }
    };
=====================================

# We can create a private variable  for a particular instance of model in Mongo

 So as in this mern project , u can see we have created a password field which is private to the model instance . U can send the password field during mongo save method & it will be private to that instance itself but it wont store in the database.

 Generally when we use this kind of private variable , we defenitely use setter & getter method for that private method by using virtual concept of mongo

 Ex :-  Here _password is the private variable . It will be saved using virtual password field.
========================== 
 userSchema
     .virtual("password")
  .set(function(password) {
    this._password = password;
    this.salt = uuidv1();
this.encry_password = this.securePassword(password); // schema method 
  })
  .get(function() {
    return this._password;
   });

   // schema method
userSchema.methods = {
  autheticate: function(plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

   securePassword: function(plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  }
};
==========================  

## While saving the password to be DB , Always we need to store the encrypted one instead of normal .
 To acheive this in our mern ,  we used crypto & uuvid modules which will encrypt our password.
===================
 const crypto = require("crypto");
const uuidv1 = require("uuid/v1");
===========================
 * Crypto is for encrypting the password using hash key.
 * uuid/v1 is used to create unique key which we used to create hash key by passing it as "Salt"

# UUID/V1 (generating unique keys which we can for random unique keys-- used above)

# Virtual setters & getters (See above example use of this virtual)

# To make use of ES6 feature into mongoose module or methods
  * Use this line  
      /* Making mongoose to make use of new ES6 promise feature */
      mongoose.Promise = global.Promise;

# mongoose option which are required & recommended while connecting mongo db

===================
// Options used for connecting mongo database with mongoose 
const mongooseOptions = {
    useNewUrlParser    : true,
    useCreateIndex     : true,
    useUnifiedTopology : true,
    useFindAndModify   : false
}; -------------- recommend options with their values.

* useNewUrlParser:
   useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser 

* useCreateIndex
   False by default. Set to true to make Mongoose's default index build use createIndex() instead of ensureIndex() to avoid deprecation warnings from the MongoDB driver

* useUnifiedTopology
   False by default. Set to true to opt in to using the MongoDB driver's new connection management engine. You should set this option to true, except for the unlikely case that it prevents you from maintaining a stable connection.

* useFindAndModify 
    True by default. Set to false to make findOneAndUpdate() and findOneAndRemove() use native findOneAndUpdate() rather than findAndModify()

 /* Connecting to the mongo database */
    mongoose.connect(config.param('mongo').connection,mongooseOptions);

    /* Adding event listeners of open & error for mongoose connection*/
    mongoose.connection
        .once('open',()=>{
            console.log('Database connected \n'); 
            loadApplication();
        })
        .on('error',error=>{
            console.log('Failure in connecting database');
            console.log('Error message : '+error.message);
        });
=================

# Dotenv
    This is npm package which is used to manage the configuration values by environment variables very easily 

  *  As early as possible in your application, require and configure     dotenv.
====================
    require('dotenv').config()
=======================
  * Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. 
======================
    For example:
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=s1mpl3
======================
  * process.env now has the keys and values you defined in your .env file.
    process.env.DB_HOST  --- wil give localhost value

# validator & express-validator ( npm packages)

  * Validator.js
    This is a npm package which is used to validate the given values 
     Ex: -
==========================
       var validator = require('validator');
      validator.isEmail('foo@bar.com'); //=> true
    There are many validator methods through we validate values. We can check their npm package read.md
==================================

  * express-validator.js
    This is a npm package which is used to validate the req of the express using validator package internally
     We can their website to know more how to validate . Also for example we can refer our mern course.

# Most common middlewares using in express application
 * body parser
        Node.js body parsing middleware.
        Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
    ===========
    app.use(bodyParser.json()); 
        // for parsing application/xwww-
        app.use(bodyParser.urlencoded({ extended: true }));
    =============================
    express with latest verison it using body-parser & provided its own parser

    ================
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    =======================

 * cookie parser
    parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware
 
   ===========
   app.use(cookieParser())
   ==============

 * cors
    CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. (so that we communicate between different ports)
     
     ==============
     app.use(cors())
    =================






# Grouping middlewares in single object in route
  we can group middleware in an array we can pass it as single but it will execute sequentially one by one in the array of middleware

  Ex :- 
================
router.post(
  "/signup",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({ min: 3 })
  ],
  signup
);
========================

# How can we send token through cookies in the routes & validates -- JWT , Express-jwt

 Here for generating the token we will use JWT ( jsonwebtoken npm module) and for validating token we use Express-jwt

  Token Generation
=====================================
     //create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);  
    //put token in cookie
    res.cookie("token", token, { expire: new Date() + 9999 }); 

    here in sign method , first option is payload & second one is secret key used for token generation
=================================== 

  Token validation
=====================================
    expressJwt({
  secret: process.env.SECRET,
})

This can be used as middleware which will validate & calls inbuilt next function of express-jwt to call next middleware if token validated
Here option we passed is  1) secret which we used for token generation (mandatory)
                          2) userProperty which we used for having payload value in the request body with specified key (here "auth")
=================================== 

# JsonWebToken & Express-jwt ====> check above & also in packages for detailed documentation

# To delete a key-value pair in the object
    Two ways  :-  1) delete objvariable['deletedKey']
                  2) 1) objvariable['deletedKey'] = undefined

# Usage of route.params for accessing the params passed through API
    API path :- "http://localhost:7000/api/8000/getProfile
    Actual route :- router.get("/api/:userId/getProfile", isSignedIn, isAuthenticated, getUser)

    router.param("userId", (req, res, next, id) => {
    here id will have the value of userId param we passed 
    ------
    };);

# Form-data can be accessed using main 2 packages (Formidable & Multer )

  * Formidable
===================
        app.post('/api/upload', (req, res, next) => {
        const form = formidable({ multiples: true });
        
        form.parse(req, (err, fields, files) => {
            if (err) {
            next(err);
            return;
            }
            res.json({ fields, files });
        });
        });
======================
  * Multer
=======================
 const fileUploadByMulter =(destination,fileFilter,fileName,limits={})=>{
    var storage = multer.diskStorage({
        destination : destination,
        filename    : fileName
    });
    const upload= multer({ storage    : storage ,
        fileFilter : fileFilter,
        limits     
    });
    return upload;
};
module.exports = fileUploadByMulter;
 versionExcelFileUpload: async (req, res, next) => {
        /* temporary variables to store upload directory & filename */
        let uploadDir, uploadFileName;
        /* File filter function required for multer configuration to validate the file before uploading */
        const fileFilter = (request, file, cb) => {
            /* validating file uploaded to be an xlsx file */
            if (!file.originalname.endsWith('.xlsx')) {
                return cb(new Error('please upload excel'), true);
            }
            cb(undefined, true);
        };
        /* destination function required for multer configuration to specify the path to be uploaded in server */
        const destination = (request, file, cb) => {
            uploadDir = config.param('mount_path') + 'versionUploads/' + req.get('userId') + '/';
            /* Creating directory for uploading if doesnt exist */
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir);
            }
            cb(null, uploadDir);
        };
        /* File name function required for multer configuration to rename the file after uploading */
        const fileName = (request, file, cb) => {
            uploadFileName = file.originalname.replace('.xlsx', '') +
                `_${dateFormat(new Date(), 'yyyy-mm-dd-HH.MM.ss')}.xlsx`;
            cb(null, uploadFileName);
        };
        /* limit object required for multer configuration to have limit size for the file after uploading */
        const limits = {
            fileSize: 2097152 // in bytes
        };
        const upload = require('../utils/fileUploadMulter')(destination, fileFilter, fileName, limits);
        /* calling single method of multer upload method for uplaoding a single file*/
        upload.single('versionExcel')(req, res, err => {
            if (err) {
                // eslint-disable-next-line no-constant-condition
                if (err.code == 'LIMIT_FILE_SIZE') {
                    err.message = 'File Size is too large. Allowed file size is 2MB';
                }
                return res.status(206).json({
                    message: err.message
                });
            }
            req.body.filePath = uploadDir;
            req.body.fileName = uploadFileName;
            req.body.userId = req.get('userId');
            req.body.productType = req.get('productType');
            next();

        });
    }
=========================

# Saving image in the database as buffer
 photo: {
      data: Buffer,
      contentType: String
    } -------------------------  // model schema object image field

//handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big!"
        });
      }
      product.photo.data = fs.readFileSync(file.photo.path);
      product.photo.contentType = file.photo.type;
    }   ------------   // here it is taken from mern (used formbiddle for form-data parsing)

# Bulk writing of records in mongoDB using mongoose bulkwrite method

    exports.updateStock = (req, res, next) => {
    let myOperations = req.body.order.products.map(prod => {
        return {
        updateOne: {
            filter: { _id: prod._id },
            update: { $inc: { stock: -prod.count, sold: +prod.count } }
        }
        };
    });

    Product.bulkWrite(myOperations, {}, (err, products) => {
        if (err) {
        return res.status(400).json({
            error: "Bulk operation failed"
        });
        }
        next();
    });
    };

    ------ mongoose example-----

    Character.bulkWrite([
    {
        insertOne: {
        document: {
            name: 'Eddard Stark',
            title: 'Warden of the North'
        }
        }
    },
    {
        updateOne: {
        filter: { name: 'Eddard Stark' },
        // If you were using the MongoDB driver directly, you'd need to do
        // `update: { $set: { title: ... } }` but mongoose adds $set for
        // you.
        update: { title: 'Hand of the King' }
        }
    },
    {
        deleteOne: {
        {
            filter: { name: 'Eddard Stark' }
        }
        }
    }
    ]).then(res => {
    // Prints "1 1 1"
    console.log(res.insertedCount, res.modifiedCount, res.deletedCount);
    });

# How to use enum in the mongoDB using mongoose
     model schema object
    ===========
    status: {
        type: String,
        default: "Recieved",
        enum: ["Cancelled", "Delivered", "Shipped", "Processing", "Recieved"]
        },
    ============
    
    for getting all possible enum values for a particular field 
    ==========
        res.json(Order.schema.path("status").enumValues);
    ============


********************* REACT *******************************************************************


# Extensions used for react js development
1) Simple react snippets
2) React Native tools

# we can add any cdns links or any import links in index.html of public folder of application

# Defining & using custom environment variables 
   Follow this link --- https://create-react-app.dev/docs/adding-custom-environment-variables/
  
  In short & easiest way to use the environment variables in the react application 
     - create .env file in the root project &  create varibles starting "REACT_APP_<<variable_name>>"
     - we can use this by process.env.<<variable_name>> in our app
    Example :- 
     .env file content
         REACT_APP_BACKEND=http://localhost:8000/api/
     usage be like ------------------- process.env.BACKEND

Note :-  This uses dotenv nodemodule internally

# In CSS , we totally have 12  divisons where we fit our elements  (Can grid view will strike u an idea)
# Event listener is used in new way in this course
     <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />

            const handleChange = name => event => {
      const value = name === "photo" ? event.target.files[0] : event.target.value; 
***above one will be used for file kind stuff**
      formData.set(name, value); 
      setValues({ ...values, [name]: value });
    };

# Usually when we want to assign or access a key of object dynmically , As far i know 2 steps
    1) { ...values, error: false, [name]: event.target.value }  ----- here name is variable which can be anything
    2 ) values[name] = event.target.value

# In react , we use { <<something>> } to render that something . 
   here only when something evaluated to true it will render means its should not be 
     1) false
     2) null
     3) undefined
     4) '' - empty string

# Implementation of protected routes
 there will be many ways to do . so far we know
 1) simply make ternary opertor or any condition & make routes in the browser router ( see udemy react example).
 2) using private route HOC component to protect routes

     const PrivateRoute = ({ component: Component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={props =>
            isAutheticated() ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/signin",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      );  
    }; --- this is HOC component

      <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />   --- this will be kept in browser router switch 
       (check in mern example)

# Integration of react app with stripe gateway is put along with file & also follow hitesh youtube video
# Integration of react app with braintree paypal gateway is put along with file and check for alternative packages along with the brain tree web dropin react package in the file  if any in future