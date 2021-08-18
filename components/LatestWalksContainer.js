const { default: LatestWalkCard } = require("./LatestWalkCard")

const LatestWalksContainer = () => {
    return (
        <section>
        <div className="mb-2 md:mb-4">
            <h2 className="text-gray-600 text-2xl lg:text-3xl font-bold">Latest walks added</h2>
            <p className="text-green-800 text-xl font-light">Explore some recently added walks</p>
        </div>
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            <LatestWalkCard />
            <LatestWalkCard />
            <LatestWalkCard />
            <LatestWalkCard />
            <LatestWalkCard />
            <LatestWalkCard />
        </div>
        </section>

    )
}

export default LatestWalksContainer;