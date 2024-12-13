import bcrypt from "bcryptjs";

async function hashPassword(){
    try {
        let userPassword = "meraj245";
        let hashValue = await bcrypt.hash(userPassword,10);
        console.log(hashValue);
        
    } catch (error) {
        console.log(error);
        
    }
}

hashPassword()
async function hashPassword(){
    try {
        let userpassword = fatimah0099;
        let hashValue = await bcrypt.hash(userpassword,10);
        console.log(hashValue);
    } catch (error) {
        console.log(hashValue);
    }
}

hashPassword()
async function hashPassword() {
    try {
        let userpassword = fm2009;
        let hashValue = await bcrypt.hash(userpassword,10);
        console.log(hashValue);
    }catch (error) {
        console.log(hashValue);
    }
}
// verifying the password using hash value:

async function verifyPass() {

    try {
        let hashValue = "$2a$10$TiNXSrZKbgGT2JJERVVJvOcqXpg6ojFMkCizz/qazt6D3A.OQ8NRC"
        let myPassword = "meraj245";
        let verify = await bcrypt.compare(myPassword, hashValue);
        console.log(verify);

        if(verify){
            console.log('Login successful');

        } else {
            console.log('invalid password!');

        }
    } catch (error) {
        console.log(error);

    }
}
verifyPass()


