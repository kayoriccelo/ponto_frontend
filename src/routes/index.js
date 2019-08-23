import Dashboard from '../apps/Dashboard';
import { FormCompany } from '../apps/Company';
import { ListJourney, FormJourney } from '../apps/Journey';
import { ListEmployee, FormEmployee } from '../apps/Employee';
import { PointMarking } from '../apps/PointMarking';
import { ListEmployeePoint, ConsultPoint } from '../apps/ConsultPoint';


export const routes = [
    {
        key: 'dashboard',
        exact: true,
        path: '/dashboard',
        component: Dashboard,
    },
    {
        key: 'registration-company',
        exact: true,
        path: '/registration/company',
        component: FormCompany,
    },
    {
        key: 'registration-journey-form',
        exact: true,
        path: '/registration/journey/:id',
        component: FormJourney,
    },
    {
        key: 'registration-journey',
        exact: true,
        path: '/registration/journey',
        component: ListJourney,
    },
    {
        key: 'registration-employee-form',
        exact: true,
        path: '/registration/employee/:id',
        component: FormEmployee,
    },
    {
        key: 'registration-employee',
        exact: true,
        path: '/registration/employee',
        component: ListEmployee,
    },
    {
        key: 'consult-point',
        exact: true,
        path: '/consultpoint/:cpf/:start/:end',
        component: ConsultPoint,
    },
    {
        key: 'employee-point',
        exact: true,
        path: '/consultpoint',
        component: ListEmployeePoint,
    },
    {
        key: 'point-marking',
        exact: true,
        path: '/pointmarking',
        component: PointMarking,
    },
];
