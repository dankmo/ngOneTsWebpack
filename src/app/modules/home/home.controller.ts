import Logger from './../../services/logger.service.ts';

export default class HomeController {
  public static $inject = [];

  public name: string;
  private _logger: Logger;

  constructor() {
    this._logger = new Logger('app.services.HomeController');
    this._logger.info('constructor', Logger.DEBUG);
  }

  public sayHello(): string {
    return 'Hello';
  }

}
