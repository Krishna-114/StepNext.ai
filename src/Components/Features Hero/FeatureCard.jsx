// Instead of making six Feature Card , we will use the concept of Reusable COmponents , just pass props.
//later we will replace this with array and access data using map.

function FeatureCard({title , description}){
    return(
        <>
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 hover:border-purple-500">
            
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-slate-400 mt-4 leading-7"> {description}</p>

        </div>
        </>
    )
}

export default FeatureCard