import { HealthResponse } from '@ugram/shared-types';
import React from 'react';
import backend from '../../api';
import { AxiosResponse } from 'axios/index';

export function Health() {
    const [serverStatus, setServerStatus] = React.useState<HealthResponse>({ message: "down" });

    React.useEffect(() => {
        backend.get('/health').then((response: AxiosResponse<HealthResponse>) => {
          setServerStatus(response.data)
        });
    }, []);

    return (
        <div>
            <p>Server status: {serverStatus.message}</p>
        </div>
    );
}
