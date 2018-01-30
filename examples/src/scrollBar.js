(() => {
  const { cc, uikit, app } = window;
  const { color4, quat } = cc.math;

  let screen = app.createEntity('screen');
  screen.addComp('Screen');

  let rot = quat.create();
  quat.fromEuler(rot, 0, 0, 30);

  let ent = app.createEntity('ent');
  ent.setParent(screen);
  // ent.setWorldRot(rot);
  let bgSprite = ent.addComp('Image');
  bgSprite.color = color4.new(1, 1, 1, 1, );
  bgSprite.width = 300;
  bgSprite.height = 20;
  let scrollBar = ent.addComp('ScrollBar');

  let area = app.createEntity('area');
  area.setParent(ent);
  let areaWidget = area.addComp('Widget');
  areaWidget.width = 300;
  areaWidget.height = 20;
  areaWidget.setAnchors(0, 0, 1, 1);

  let handle = app.createEntity('handle');
  handle.setParent(area);
  let handleSprite = handle.addComp('Image');
  handleSprite.color = color4.new(0, 1, 1, 1);
  handleSprite.width = 20;
  handleSprite.height = 20;

  scrollBar.dragArea = screen;
  scrollBar.handle = handle;
  // scrollBar.direction = uikit.VERTICAL;
  // scrollBar.reverse = true;
  // scrollBar.scrollPos = 0.3;
  scrollBar.value = 0.3;
})();