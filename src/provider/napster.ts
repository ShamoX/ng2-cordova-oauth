import { OAuthProvider, IOAuthOptions } from "../provider";


/*
 * Configuration options for using Facebook oauth
 */
export interface INapsterOptions extends IOAuthOptions {
    authType?: string;
}

export class Napster extends OAuthProvider {

    options: INapsterOptions;
    protected authUrl: string = 'https://api.napster.com/oauth';
    protected defaults: Object = {
      responseType: 'code'
    };

    constructor(options: INapsterOptions = {}) {
      super(options);

/*
      if (!options.appScope || options.appScope.length <= 0) {
        throw new Error(`A ${this.name} app scope must exist`);
      }
      */
    }

    protected optionsToDialogUrl(options) {
      let url = super.optionsToDialogUrl(options);

      if (options.authType) {
          url += `&auth_type=${options.authType}`;
      }

      return url;
    }

}
