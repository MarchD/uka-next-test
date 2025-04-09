import {
    Heart,
    Handshake,
    Music2,
    Hand
} from 'lucide-react'; // You can change to other icon sets if preferred

export default function WhatWeDo() {
    const items = [
        {
            icon: <Heart className="w-10 h-10" />,
            title: 'Uniting Ukrainians',
            subtitle: 'in South Africa',
            className: 'bg-custom-danger/5'
        },
        {
            icon: <Handshake className="w-10 h-10" />,
            title: 'Enabling Cooperation',
            subtitle: 'Between Ukraine and South Africa',
            className: 'bg-custom-highlight/10'

        },
        {
            icon: <Music2 className="w-10 h-10" />,
            title: 'Promoting Culture',
            subtitle: 'Of Ukraine In South Africa',
            className: 'bg-custom-info/5'
        },
        {
            icon: <Hand className="w-10 h-10" />,
            title: 'Supporting Ukraine',
            subtitle: 'And Its Prosperity',
            className: 'bg-custom-primary/5'
        },
    ];

    return (
        <section className="py-16 mt-10 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">What we do</h2>
            <p className="text-blue-600 mb-[50px] text-center">
                Community of Ukrainians and those who love Ukraine
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[800px] m-auto">
                {items.map((item, index) => (
                    <div key={index} className={`flex items-start gap-4  px-7 py-10 ${item.className}`}>
                        <div className="text-black">{item.icon}</div>
                        <div>
                            <h3 className="text-md font-bold uppercase tracking-tight">{item.title}</h3>
                            <p className="text-gray-600">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
