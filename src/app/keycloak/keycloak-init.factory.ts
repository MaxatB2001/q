import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        realm: 'test-realm',
        url: environment.keycloakHost,
        clientId: 'frontend-client',
      },
      initOptions: {
        onLoad: 'check-sso',
        // checkLoginIframe: false,
        // silentCheckSsoRedirectUri:
        //   window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}