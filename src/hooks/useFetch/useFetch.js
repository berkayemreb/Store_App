import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url);
            // REST apiden gelen cevap promise yapısındadır ve bu promise yapısından gelen cevabı {data} şeklinde de parçalayabiliriz yada setProductsList(response.data) şeklinde de yapabiliriz.
            // Parçaladığımız "data" yı "responseData" şeklinde yeni bir isimlendirme yaptık (ES6 nın özelliği)

            // const response = await axios.get(URL_API); ({data} şeklinde kullanmak istemezsek eğer response.data şeklinde kullanmak istersek bu şekilde tanımlamak gerekir)
            setLoading(false);
            setData(responseData);

        } catch (err) {

            setLoading(false);
            setError(err.message);

        } // err ve err.message try catch ile birlikte otomatikmen gelmektedir.

    }

    useEffect(() => {
        fetchData();
    }, [])

    return { data, loading, error }
}

export default useFetch