import bcrypt from"bcrypt";


//hashing the password: 
export async function Hash(password){
    try{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password,salt);
    }catch(error){
        console.log("can't generate password...",error);
    }
};

//comparing passwords:
export async function passwordVerifier(password,hashedPassword){
    return await bcrypt.compare(password,hashedPassword);
} ;