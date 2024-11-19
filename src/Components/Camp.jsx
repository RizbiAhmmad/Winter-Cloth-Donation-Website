import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Camp = () => {

    const campaigns = useLoaderData()
    console.log(campaigns);
    return (
        <div className="p-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign) => (
                <div 
                    key={campaign.id} 
                    className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                >
                    <img 
                        src={campaign.image} 
                        alt={campaign.title} 
                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{campaign.title}</h2>
                    <p className="text-gray-600 mb-2"><strong>Description:</strong>{campaign.description}</p>
                    <p className="text-gray-500 mb-4">
                        <strong>Division:</strong> {campaign.division}
                    </p>
                    <div className="text-center">
                        <button className='btn btn-primary'>Donate Now</button>
                        {/* <Link 
                            to={`/campaign/${campaign.id}`} 
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Donate Now
                        </Link> */}
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Camp;