import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const params =useParams()
    return (
        <div>
            {params.serviceId}
        </div>
    );
};

export default ServiceDetail;