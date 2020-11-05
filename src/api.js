import { API } from './config';
import { Auth } from "aws-amplify";

export const getCrawlers = async () => {
    const response = await fetch(`${API}/crawlers`, {
        headers: {
            'Authorization': `Bearer ${(await Auth.currentSession()).getIdToken().jwtToken}`,
        }
    });

    if (response.ok) {
        return response.json();
    }

    throw Error(response.statusText);
}