const sinon = require('sinon');
const controladorActualizar = require ('../../controladores/controladoractualizar');
const controladorGuardar = require ('../../controladores/controladorguardar');
const controladorEliminar = require ('../../controladores/controladoreliminar');
const controladorConsultar = require ('../../controladores/controladorconsultar');
const controladorConsultarPorId = require ('../../controladores/controladorconsultarporid');
const daoActualizar = require ('../../dao/actualizar');
const daoGuardar = require ('../../dao/guardar');
const daoConsultar = require ('../../dao/consultar');
const daoEliminar = require ('../../dao/eliminar');
const expect = require("chai").expect;

describe('Actualizar',  ()=> {
	it('Actualización por Id OK', async () => {
		const mockResponse = () => {
			const res = { statusCode: 200 };
			res.status = sinon.stub().returns(res);
			res.json = sinon.stub().returns(res);
			res.send = sinon.stub().returns(res);
			return res;
		  };
		
		const res = mockResponse();
		const request = {
			body: {
				"nombre":"Juan Pablo",
				"apellido":"Zapata5",
				"correo":"jzapata129@gmail.com",
				"password": "Jzapata129"
			},
			params: { id: "6663a4787b30cbbb7e1a10fc"}
		  };
		sinon.stub(daoActualizar, 'ejecutar').resolves({});
		await controladorActualizar.ejecutar(request, res);
	
		expect(res.statusCode).to.equal(200);
	})
	it('Actualizar por Id Esquema Inválido', async () => {
		const mockResponse = () => {
			const res = { statusCode: 400 };
			res.status = sinon.stub().returns(res);
			res.json = sinon.stub().returns(res);
			res.send = sinon.stub().returns(res);
			return res;
		  };
		
		const res = mockResponse();
		const request = {
			body: {
				"nombre":"Juan Pablo",
				"apellido":"Zapata5",
				"correo":"jzapata129@gmail.com",
				"password2": "Jzapata129"
			},
			params: { id: "6663a4787b30cbbb7e1a10fc"}
		  };
		
		await controladorActualizar.ejecutar(request, res);
	

		expect(res.statusCode).to.equal(400);
	})
	it('Actualizar por Id el usuario no existe', async () => {
		const mockResponse = () => {
			const res = { statusCode: 404 };
			res.status = sinon.stub().returns(res);
			res.json = sinon.stub().returns(res);
			res.send = sinon.stub().returns(res);
			return res;
		  };
		
		const res = mockResponse();
		const request = {
			body: {
				"nombre":"Juan Pablo",
				"apellido":"Zapata5",
				"correo":"jzapata129@gmail.com",
				"password2": "Jzapata129"
			},
			params: { id: "65e13820c6623668dd31dee7"}
		};
		await controladorConsultarPorId.ejecutar(request, res);

		expect(res.statusCode).to.equal(404);
	})

});

describe('Guardar',  ()=> {
	it('Guardar OK', async () => {
		const mockResponse = () => {
			const res = { statusCode: 201 };
			res.status = sinon.stub().returns(res);
			res.json = sinon.stub().returns(res);
			res.send = sinon.stub().returns(res);
			return res;
		  };
		
		const res = mockResponse();
		const request = {
			body: {
				"nombre":"Juan Pablo",
				"apellido":"Zapata5",
				"correo":"jzapata129@gmail.com",
				"password": "Jzapata129"
			}
		  };
		sinon.stub(daoGuardar, 'ejecutar').resolves({});
		await controladorGuardar.ejecutar(request, res);
	
		expect(res.statusCode).to.equal(201);
	})
	it('El usuario ya existe', async () => {
		const mockResponse = () => {
			const res = { statusCode: 400 };
			res.status = sinon.stub().returns(res);
			res.json = sinon.stub().returns(res);
			res.send = sinon.stub().returns(res);
			return res;
		  };
		
		const res = mockResponse();
		const request = {
			body: {
				"nombre":"Juan Pablo",
				"apellido":"Zapata5",
				"correo":"jzapata129@gmail.com",
				"password": "Jzapata129"
			}
		  };
		sinon.stub(daoConsultar, 'consultar').resolves([{
			"id": "6664d6e30059c81f260862e8",
			"nombre":"Juan Pablo",
			"apellido":"Zapata5",
			"correo":"jzapata129@gmail.com",
			"password": "Jzapata129"
		  }]);
		await controladorActualizar.ejecutar(request, res);
	

		expect(res.statusCode).to.equal(400);
	})
	it('Guardar Esquema Inválido', async () => {
		const mockResponse = () => {
			const res = { statusCode: 400 };
			res.status = sinon.stub().returns(res);
			res.json = sinon.stub().returns(res);
			res.send = sinon.stub().returns(res);
			return res;
		  };
		
		const res = mockResponse();
		const request = {
			body: {
				"nombre":"Juan Pablo",
				"apellido":"Zapata5",
				"correo":"jzapata129@gmail.com",
				"password2": "Jzapata129"
			}
		  };

		await controladorGuardar.ejecutar(request, res);
	
		expect(res.statusCode).to.equal(400);
	})

});

describe('Consultar por Id',  ()=> {
	it('Consulta por Id OK', async () => {
		const mockResponse = () => {
			const res = { statusCode: 200 };
			res.status = sinon.stub().returns(res);
			res.json = sinon.stub().returns(res);
			res.send = sinon.stub().returns(res);
			return res;
		  };
		
		const res = mockResponse();
		const request = {
			params: { id: "6663a4787b30cbbb7e1a10fc"}
		  };
		await controladorConsultarPorId.ejecutar(request, res);
	
		expect(res.statusCode).to.equal(200);
	})
	it('Consulta por Id el usuario no existe', async () => {
		const mockResponse = () => {
			const res = { statusCode: 404 };
			res.status = sinon.stub().returns(res);
			res.json = sinon.stub().returns(res);
			res.send = sinon.stub().returns(res);
			return res;
		  };
		
		const res = mockResponse();
		const request = {
			params: { id: "65e13820c6623668dd31dee7"}
		  };
		
		await controladorConsultarPorId.ejecutar(request, res);

		expect(res.statusCode).to.equal(404);
	})

});

describe('Consultar',  ()=> {
	it('Consulta OK', async () => {
		const mockResponse = () => {
			const res = { statusCode: 200 };
			res.status = sinon.stub().returns(res);
			res.json = sinon.stub().returns(res);
			res.send = sinon.stub().returns(res);
			return res;
		  };
		
		const res = mockResponse();
		const request = {
			queryString: { 
				"nombre":"Juan Pablo",
				"apellido":"Zapata"
			}
		  };
		await controladorConsultar.ejecutar(request, res);
	
		expect(res.statusCode).to.equal(200);
	})
	it('Consulta por Id el usuario no existe', async () => {
		const mockResponse = () => {
			const res = { statusCode: 404 };
			res.status = sinon.stub().returns(res);
			res.json = sinon.stub().returns(res);
			res.send = sinon.stub().returns(res);
			return res;
		  };
		
		const res = mockResponse();
		const request = {
			queryString: { 
				"usuario":"Sin nombre",
				"apellido":"Sin apellido"
			}
		  };
		
		await controladorConsultar.ejecutar(request, res);

		expect(res.statusCode).to.equal(404);
	})

});

describe('Eliminar',  ()=> {
	it('Eliminar por Id OK', async () => {
		const mockResponse = () => {
			const res = { statusCode: 200 };
			res.status = sinon.stub().returns(res);
			res.json = sinon.stub().returns(res);
			res.send = sinon.stub().returns(res);
			return res;
		  };
		
		const res = mockResponse();
		const request = {
			params: { id: "6663a4787b30cbbb7e1a10fc"}
		  };

		sinon.stub(daoEliminar, 'ejecutar').resolves({});
		await controladorEliminar.ejecutar(request, res);
	
		expect(res.statusCode).to.equal(200);
	})
	it('Eliminar por Id el usuario no existe', async () => {
		const mockResponse = () => {
			const res = { statusCode: 404 };
			res.status = sinon.stub().returns(res);
			res.json = sinon.stub().returns(res);
			res.send = sinon.stub().returns(res);
			return res;
		  };
		
		const res = mockResponse();
		const request = {
			params: { id: "65e13820c6623668dd31dee7"}
		  };
		
		await controladorConsultarPorId.ejecutar(request, res);

		expect(res.statusCode).to.equal(404);
	})

});