// this is the resusable Card for Working Steps in Landing Page.

function StepsCard({no , title , description}){
    return(
        <>
        <div className="flex flex-col justify-center bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 hover:border-purple-500">
            <h1>Step : {no}</h1>

            <h2 className="text-2xl font-bold text-white">
             {title}
            </h2>

            <p className="text-slate-400 mt-4 leading-7">{description}</p>
        </div>
        </>
    )
}

export default StepsCard;