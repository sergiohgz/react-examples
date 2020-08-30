import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { Task } from '../../models/Task';

// Datos para emular la respuesta que nos daría el API
const tasksMock: Task[] = [
    {
        id: 1,
        completed: true,
        description: 'Learn Javascript',
    },
    {
        id: 2,
        completed: true,
        description: 'Learn JSX',
    },
    {
        id: 3,
        completed: false,
        description: 'Learn React',
    },
    {
        id: 4,
        completed: true,
        description: 'Learn to read basic Typescript',
    },
    {
        id: 5,
        completed: false,
        description: 'Learn to program basic Typescript',
    },
];

// Llamada API para obtener tareas
const getTasks = (): AxiosPromise<Task[]> => {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: '/', // URL para pruebas, sustituir cuando exista un API real
    };
    /*
     * Axios retorna una promesa que, cuando se resuelva (ejecutará el then),
     * tendrá el código de respuesta, los datos, etc. Como la llamada que se
     * está haciendo es "falsa" (la API no es real), mockeamos nuestra falsa
     * respuesta, simulando un retardo de 3.5 segundos
     */
    return axios(config).then(
        result =>
            new Promise(resolve =>
                setTimeout(() => resolve({ ...result, data: tasksMock }), 3500)
            )
    );
};

const api = {
    getTasks,
};

export default api;
