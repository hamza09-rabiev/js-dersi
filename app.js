





function newElement (tag,param,parent) {
	const el = document.createElement(tag);
	
	for (const [key,value] of Object.entries(param)){
		if (key == 'classList'){
			for (const newClass of value ) {
				el.classList.add(newClass)
		}
	}else{
		el[key] = value;
	}
}
	if (parent !== null) parent.append(el)
	return el
}

let h1 = newElement('h1',{
	classList: ['big',],
	textContent: 'aa'
},decument.body)
let form = newElement('form',{
	classList: ['gray','big'],
	textContent: 'aa',
	value:'31'
},document.body)


document.body.append(form)
