async function sendData(id, name, header, description, image)	{

		let data = new FormData()
		
		data.append('id', id)
		data.append('name', name.value)
		data.append('header', header.value)
		data.append('description', description.value)
		data.append('image', image.files[0])

		fetch('/inventory', {
		  method: 'POST',
		  body: data
		})
    }