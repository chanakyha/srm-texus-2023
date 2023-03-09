import React from 'react'

const Register = () => {
  return (
    <section className="w-full h-full bg-black py-[110px] font-sniglet text-white p-4 md:p-16">
        <div className='mx-auto max-w-2xl'>
            <h1 className="text-3xl my-8 ">REGISTRATION</h1>
        </div>
        <div className='w-full max-w-2xl h-full mx-auto text-white h-96 border border-FFFFFF-500 p-[30px] rounded-md'>
            <form>
                <input className="bg-black w-full max-w-2xl border border-FFFFFF-500 my-2 h-14 pl-[15px] rounded-md placeholder-white" type="text" placeholder="Name" id="name" name="name"/>
                <br></br>
                <input className="bg-black w-full max-w-2xl border border-FFFFFF-500 my-2 h-14 pl-[15px] rounded-md placeholder-white" type="text" placeholder="College / University Name" id="clgName" name="clgName"/>
                <br></br>
                <input className="bg-black w-full max-w-2xl border border-FFFFFF-500 my-2 h-14 pl-[15px] rounded-md placeholder-white" type="text" placeholder="Register Number" id="regNumber" name="regNumber"/>
                <br></br>
                <div className="grid lg:grid-cols-2 gap-3" >
                        <select className="bg-black w-full max-w-2xl border border-FFFFFF-500 my-2 h-14 pl-[15px] pr-[30px] rounded-md" name="year" id="year">
                            <option value="">Year of Study</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4"> 4</option>
                            <option value="4+">4+</option>
                        </select>
                     <input className="bg-black w-full max-w-2xl border border-FFFFFF-500 my-2 h-14 pl-[15px] rounded-md placeholder-white" type="text" placeholder="Department" id="department" name="department"/>
                </div>
                <div className="grid lg:grid-cols-2 gap-3" >
                    <input className="bg-black w-full max-w-2xl border border-FFFFFF-500 my-2 h-14 pl-[15px] rounded-md placeholder-white" type="email" placeholder="Email" id="mail" name="mail"/>
                    <input className="bg-black w-full max-w-2xl border border-FFFFFF-500 my-2 h-14 pl-[15px] rounded-md placeholder-white" type="tel" placeholder="Phone Number" id="phnNum" name="phnNum"/>
                </div>
                <input className="bg-gradient-to-r from-[#FFEA2C] via-[#FF7A5D] to-[#FF0000] w-full max-w-2xl border border-FFFFFF-500 my-2 h-14 pl-[15px] rounded-md " type="submit" value="Register"/>
            </form>
        </div>
    </section>
  )
 }
export default Register