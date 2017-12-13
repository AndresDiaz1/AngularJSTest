import HandsontableModule from './handsontable';
import HandsontableController from './handsontable.controller';
import HandsontableComponent from './handsontable.component';
import HandsontableTemplate from './handsontable.html';

describe('Handsontable', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(HandsontableModule));

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new HandsontableController();
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
      expect(HandsontableTemplate).toMatch(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = HandsontableComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(HandsontableTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(HandsontableController);
    });
  });
});
