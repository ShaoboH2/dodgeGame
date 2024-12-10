const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Keyboard,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Exps.Height,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Cnds.OnLayoutStart
	];
};
self.C3_JsPropNameTable = [
	{Player: 0},
	{Keyboard: 0},
	{Speed: 0},
	{Bullet: 0},
	{Block: 0},
	{Text: 0},
	{Restart: 0},
	{Score: 0},
	{Text2: 0},
	{SpawnTime: 0},
	{FinalScore: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Block: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Restart: class extends self.IButtonInstance {},
	Score: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {}
}