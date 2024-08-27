      Blockly.Blocks['test_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lorem lpsum...");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("A test block, won't work.");
 this.setHelpUrl("");
  }
};

      Blockly.Blocks['end_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("End");
    this.setPreviousStatement(true, null);
    this.setColour(330);
 this.setTooltip("A more organized way of ending your scripts.");
 this.setHelpUrl("");
  }
};

      Blockly.Blocks['random_dorito'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DORITOS")
        .appendField(new Blockly.FieldImage("https://bark.dumorando.com/src/emojis/svg/normal/smiley.svg", 20, 20, { alt: ":)", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("idk");
 this.setHelpUrl("");
  }
};

      Blockly.Blocks['reapete'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Start when \"∞\" ends");
    this.setColour(45);
 this.setTooltip("Starts the code until \"∞\" ends.");
 this.setHelpUrl("https://www.youtube.com/watch?v=j98suMfW1tc");
  }
};

Blockly.Blocks['logic_mousedown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouse down?");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("If mouse downs, returns True.");
 this.setHelpUrl("https://en.scratch-wiki.info/wiki/Mouse_Down%3F_(block)");
  }
};
