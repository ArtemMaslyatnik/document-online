import React from "react";
import Login from "../pages/Login";
import Event from '../pages/Event';
import Company from '../pages/Company';
import CompanyItem from "../pages/CompanyItem";
import Counterparty from '../pages/catalog/counterparty/Counterparty';
import CounterpartyItem from "../pages/catalog/counterparty/CounterpartyItem";
import ContractItem from "../pages/catalog/contract/ContractItem";
import Contract from "../pages/catalog/contract/Contract";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/',
    COMPANIES = '/companies',
    COMPANY = '/company',
    COUNTERPARTIES = '/counterparties',
    COUNTERPARTY = '/counterparty',
    CONTRACTS = '/contracts',
    CONTRACT = '/contract',
    TYPE_CONTRACTS = '/type-contracts',
}

export enum RouteNamesTitle {
    COMPANIES = 'companies',
    COMPANY = 'company',
    COUNTERPARTIES = 'counterparties',
    COUNTERPARTY = 'counterparty',
    CONTRACTS = 'contracts',
}

export enum RouteNamesCRUD {
    CREATE = 'create',
    ADD = 'add',
    DELETE = 'delete',
    EDITE = 'edite',
    SAVE = 'save',
}

export enum ElementsInterface {
    CLOSED = 'X',
    OPEN_LIST = '...'
}

export enum DataFormat {
    YYYY_D_MM_D_DD_hh_C_mm_C_SS = 'YYYY-MM-DD hh:mm:ss',
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, component: Login},
    {path: RouteNames.COMPANIES, exact: true, component: Company},
    {path: RouteNames.COMPANY + '/:id', exact: true, component: CompanyItem},
    {path: RouteNames.COUNTERPARTIES, exact: true, component: Counterparty},
    {path: RouteNames.COUNTERPARTY + '/:id', exact: true, component: CounterpartyItem},
    {path: RouteNames.CONTRACTS, exact: true, component: Contract},
    {path: RouteNames.CONTRACT + '/:id', exact: true, component: ContractItem}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, exact: true, component: Event}
]
