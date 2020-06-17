import { InjectionToken } from '@angular/core';

export const API_CONFIG = new InjectionToken<ApiConfig>('Utrust-Api LAZY_MAPS_API_CONFIG');

/**
 * Configuration for Utrust authentication
 */
export interface ApiConfig
{
    /**
     * The API Key (see:
     * https://docs.api.utrust.com/#section/Authentication)
     */
    apiKey?: string;

    /**
     *  Required
     */
    apiurl: string;
}