import AboutModule from './about';

describe('About', () => {
  let $rootScope;
  let $state;
  let $location;
  let $componentController;
  let $compile;

  beforeEach(window.module(AboutModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('About component should be visible when navigates to /about', () => {
      $location.url('/about');
      $rootScope.$digest();

      expect($state.current.component).toEqual('about');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('about', {
        $scope: $rootScope.$new(),
      });
    });

    it('has a name property', () => { // erase if removing this.name from the controller
      expect(controller.name).toBeDefined();
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope;
    let template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<about></about>')(scope);
      scope.$apply();
    });

    it('has name in template', () => {
      expect(template.find('h1').html()).toEqual('about');
    });
  });
});
