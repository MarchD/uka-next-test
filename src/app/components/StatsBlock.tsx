export default function StatsBlock() {
    const stats = [
        {
            value: '20',
            title: 'Beneficiary Organisations',
        },
        {
            value: '99%',
            title: 'Settlements',
        },
        {
            value: '30,000',
            title: 'Delivered Parcels',
        },
    ];

    return (
        <section className="bg-custom-info/10 py-16">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="relative">
                        <div className="text-[6rem] font-bold text-custom-info pointer-events-none select-none">
                            {stat.value}
                        </div>
                        <h4 className="text-lg font-semibold  text-gray-900">{stat.title}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}
