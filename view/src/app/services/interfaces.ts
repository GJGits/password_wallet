export interface Credential_ {
    name: string;
    value: string;
}

export interface Secret {
    name: string;
    value: string;
    lastUpdate: number;
}

export interface WalletItem {
    id: number;
    serviceName: string;
    description: string;
    credentials: Credential_[];
    secrets: Secret[];
}

export interface ServerResponse {
    status: number;
    errorMessage?: string;
}