import { useEffect, useState } from "react";

const useServiceDetail = (serviceId) => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch(`https://lit-dawn-96860.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])
    return [service]

}

export default useServiceDetail;