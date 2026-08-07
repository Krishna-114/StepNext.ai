
// This is the Navbar code.

function NavBar(){
    return(
        <>
        <nav className="flex justify-between items-center px-10 py-5">

        {/* Left section includes :  */}
        <div>
            <h1 className="text-3xl font-bold">
            StepNext<span className="text-purple-500">.ai</span>
            </h1>
        </div>

        {/* Middle Section includes :  */}
        <div className="flex gap-8">
            <a className="text-slate-300 hover:text-white hover:text-xl transition-all duration-300">Home</a>
            <a className="text-slate-300 hover:text-xl hover:text-white transition-all duration-300"> Features </a>
            <a className="text-slate-300 hover:text-xl hover:text-white transition-all duration-300"> About </a>
        </div>

        {/* Right Section includes :  */}

        <div className="flex items-center gap-4">
            <button>Login</button>

            <button className="bg-purple-600 hover:bg-purple-700 hover:scale-105  transition-all duration-200 text-white px-3 py-2 rounded-xl">Create Account</button>

            <button>☰</button>

        </div>
            
        </nav>
       
        </>
    )
}

export default NavBar;

