//------LIST-------

var List = function() {

};
List.prototype = {
	addSection: function(title) {
		return new Section(title);
	},

	addToDom: function() {
		var header = document.createElement('h1');
		header.innerHTML = 'TODO List';

		var div = document.createElement('div');
		div.id = 'sections';
		div.appendChild(header);

		var input = document.createElement('input');
		input.type = 'text';
		input.placeholder = 'Title';
		input.name = 'sectionTitle';

		var button = document.createElement('button');
		button.innerHTML = 'New Section';
		button.name = 'addSectionButton';

		var container = document.createElement('section');
		document.body.appendChild(container);

		container.appendChild(header);
		container.appendChild(div);
		container.appendChild(input);
		container.appendChild(button);
	}
};

//------SECTION-------

var Section = function(title) {
	this._title = title;
};
Section.prototype = {
	addItem: function(content) {
		return new Item(content, this._title);
	},

	addToDom: function() {
		var sectionsDiv = document.getElementById('sections');

		var section = document.createElement('div');
		section.id = this._title;

		var title = document.createElement('h2');
		title.innerHTML = this._title;

		var input = document.createElement('input');
		input.type = 'text';
		input.placeholder = 'Add item...';
		input.name = 'sectionTitle';

		var button = document.createElement('button');
		button.innerHTML = '+';
		button.name = 'addItemButton';

		var itemsList = document.createElement('ul');
		itemsList.id = this._title + " List";

		section.appendChild(title);
		section.appendChild(itemsList);
		section.appendChild(input);
		section.appendChild(button);
		sectionsDiv.appendChild(section);
	}

};

//------ITEM-------

var Item = function(content, sectionTitle) {
	this._content = content;
	this._title = sectionTitle;


};
Item.prototype = {
	addToDom: function() {
		var ul = document.getElementById(this._title + " List");
		var li = document.createElement("LI");
		li.innerHTML = this._content;

		ul.appendChild(li);
	}
};

//------EXECUTION------

var list = new List();						//The script doesnt take input from the html ...yet
list.addToDom();

var section = list.addSection('Shop');
section.addToDom();

var item = section.addItem("Buy vero");
item.addToDom();

//-----UNFINISHED-------