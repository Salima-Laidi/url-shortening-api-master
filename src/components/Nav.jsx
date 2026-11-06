
function Nav() {
    return (
    <div className="flex justify-between items-center mx-40 my-10">
        <div className="flex gap-15 items-center">
            <span className="font-bold text-3xl text-Gray-900">Shortly</span>     
            <ul className="flex gap-7 font-semibold text-Gray-500">      
                <li className="hover:text-Gray-900 transition-all duration-150 hover:cursor-pointer"><a href="#features">Features</a></li>    
                <li className="hover:text-Gray-900 transition-all duration-150 hover:cursor-pointer"><a href="#pricing">Pricing</a></li>     
                <li className="hover:text-Gray-900 transition-all duration-150 hover:cursor-pointer"><a href="#resources">Resources</a></li>         
            </ul>                      
        </div> 
        <div className="flex gap-8 items-center">
            <button className="text-Gray-500 font-semibold hover:text-Gray-900 hover:cursor-pointer transition-all duration-150"><a href="#">Login</a></button>
            <button className="py-2 px-6 bg-Blue-400 text-white rounded-full font-semibold hover:bg-Blue-400/60 hover:cursor-pointer transition-all duration-150"><a href="#">Sign Up</a></button>
        </div>
    </div>   
    )   
}

export default Nav;