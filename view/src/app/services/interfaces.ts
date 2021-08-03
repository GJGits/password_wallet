export interface Credential_ {
    name: string;
    value: string;
}

export interface Secret {
    name: string;
    value: string;
    lastUpdate: string;
}

export interface WalletItem {
    id: number;
    serviceName: string;
    description: string;
    credentials: Credential_[];
    secrets: Secret[];
}