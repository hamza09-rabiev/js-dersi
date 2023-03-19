





function newElement (tag,param) {
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

	return el
}

let h1 = newElement('h1',{
	classList: ['big',],
	textContent: 'aa'
})
let form = newElement('form',{
	classList: ['gray'],
	textContent: 'aa'
})

document.body.append(h1)
document.body.append(form)
