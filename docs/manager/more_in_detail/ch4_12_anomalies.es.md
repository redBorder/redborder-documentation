
# Detección de anomalías

Cuando la detección de anomalías está activada (Ver General Settings: outliers) en las vista de Tops de cada módulo aparecerá, en el menú desplegable de los eventos la opción de "Outliers".

![Anomalías](images/ch04_img048.png)

Anomalías

El sistema realizará la detección de anomalías y actualizará el gŕafico con los resultados.

![Anomalías detectadas](images/ch04_img049.png)

En la gráfica resultante, la línea de puntos corresponde con la predicción mientras que los círculos representan las anomalías detectadas.

![Detalle de anomalías](images/ch04_img050.png)

Al posicionar el cursor encima de la gráfica, ésta muestra el valor real, el valor esperado y la valor de la predicción.

Para automatizar este proceso, es posible crear alarmas en el sistema que notificaran al usuario cuando se produzcan anomalías. Para ello haz click en **Herramientas -> Alarmas** y ajuste los parámetros de la alarma, activando la opción **Outliers Enabled**, el Time Window y las condiciones o filtros sobre los que realizar la detección.

![Alarmas de anomalías](images/ch04_img051.png)

Alarmas de anomalías

En caso de haber configurado la notificación por e-mail el usuario recibirá un correo electrónico cuando la alarma se active.

![Notificación de alarma por correo](images/ch04_img052.png)

Notificación de alarma por correo
