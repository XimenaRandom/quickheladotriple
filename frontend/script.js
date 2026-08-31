async function cargarDatos() {
      const resDash = await fetch('/api/dashboard');
      const dash = await resDash.json();

      document.getElementById('totalProd').innerText = dash.totalProductos;
      document.getElementById('promedio').innerText = 'Bs. ' + dash.precioPromedio;
      document.getElementById('stockTotal').innerText = dash.stockTotal;
      document.getElementById('masEco').innerText = `${dash.productoEconomico[0].nombre} (Bs. ${dash.productoEconomico[0].precio})`;
      document.getElementById('masCaro').innerText = `${dash.productoCostoso[0].nombre} (Bs. ${dash.productoCostoso[0].precio})`;

      document.getElementById('listEco').innerHTML = dash.tresEconomicos.map(p => `<li>${p.nombre} - Bs. ${p.precio}</li>`).join('');
      document.getElementById('listVendidos').innerHTML = dash.cincoMasVendidos.map(p => `<li>${p.nombre} (${p.unidades_vendidas} vendidos)</li>`).join('');

      const resProd = await fetch('/api/productos');
      const prods = await resProd.json();
      document.getElementById('tablaProductos').innerHTML = prods.map(p => 
        `<tr><td>${p.identificador}</td><td>${p.nombre}</td><td>${p.categoria}</td><td>Bs. ${p.precio}</td><td>${p.stock}</td><td>${p.unidades_vendidas}</td></tr>`
      ).join('');
    }
    cargarDatos();