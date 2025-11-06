import bcrypt from 'bcryptjs';

const password = "hunter123";
const saltRounds = 14;


// /register /forgotpassword
const hashedPassword = await bcrypt.hash(password, saltRounds);
//console.log(hashedPassword);

const savedHashedPassword = "$2b$14$bSStc.sLtuwE4uWckCat0ugDhpiQjFSFTNL3oqSKUjPDsVeTBhGNS";
const comparePassword = "hUnter123";

// /login
const isSame = await bcrypt.compare(comparePassword, savedHashedPassword);
console.log(isSame);



