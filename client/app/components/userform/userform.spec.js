import UserformModule from './userform';
import UserformController from './userform.controller';
import UserformComponent from './userform.component';
import UserformTemplate from './userform.html';

describe('Userform', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(UserformModule));

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new UserformController();
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      const controller = makeController();

      expect(controller.name).toBeDefined();
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(UserformTemplate).toMatch(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = UserformComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(UserformTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(UserformController);
    });
  });
});
