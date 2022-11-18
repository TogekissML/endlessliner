(async () => {
    await $.getScript("https://cdn.jsdelivr.net/gh/parseml/many-deobf@latest/deobf.js");
linertimer = Deobfuscator.function(LinerManager.prototype, "a.remainsVeryBrief&&(b=0.075)", true)
linerlimit = Deobfuscator.function(LinerManager.prototype, "Math.floor(0.5", true)
LinerManager.prototype[linertimer] = function() {}
LinerManager.prototype[linerlimit] = function() {}
  })();
