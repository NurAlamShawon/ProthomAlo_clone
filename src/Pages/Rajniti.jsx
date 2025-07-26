import React from 'react';
import RajnitiSection01 from '../Components/RajnitiSection01/RajnitiSection01';
import RajnitiSection02 from '../Components/RajnitiSection02/RajnitiSection02';
import { Helmet } from 'react-helmet';

const Rajniti = () => {
    return (
        <div>
             <Helmet>
                <title>রাজনীতি - প্রথম আলো</title>
                <meta name="description" content="বাংলাদেশ ও আন্তর্জাতিক রাজনীতির সর্বশেষ খবর পড়ুন প্রথম আলোতে।" />
                <meta property="og:title" content="রাজনীতি - প্রথম আলো" />
                <meta property="og:description" content="বাংলাদেশ ও আন্তর্জাতিক রাজনীতির সর্বশেষ খবর পড়ুন প্রথম আলোতে।" />
                <meta name="keywords" content="রাজনীতি, বাংলাদেশ, খবর, নির্বাচন, দলীয় রাজনীতি" />
            </Helmet>
            <RajnitiSection01/>
            <RajnitiSection02/>
        </div>
    );
};

export default Rajniti;