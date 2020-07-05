---


---

<h2 id="section"><img src="https://lh3.googleusercontent.com/JYHNkyI0C0K0rEDgxCPu-Pv_dUwxCrl6xMhgHGSuRLGzSnB3o-jiRRYIISDjtCHDXGqijYhFztcW3JF4Q8lpa5YVv_Gp1N_sw5io_5wH94pMGZTh4SmYVTAyauDsH3bLeqKUtBf1vgCBSMgH8yUcbmXP8Cxe1PXx2cDWq6AK8GZO4f3LjuiKkx30XtTwUdG8RxrYtJglk5hSxwwlWq8wIqIsWJmIPv9NesDurxnYL8RwLEusUWsyYN8JpSwTEf0p6QRiLauYjGEs7YKmc-WDxFa0rVRFeZm7rrF93JJYaNDV_Dn2iJO5EBNHj6-A9tkxS-IqvABt_pFP8mC6pB9yGQ9ry73q_kOT6c0DRdDo0qBFrK6KRLOhQADIopR8xmf0q4c2p9QXREWFJfA8cnTLMSj3cPyWI63UEm8j5D32DOVZLkwtPU5M7BouP0vRAJumEgRYRlX6dTAyBwXTVFMEs10OnrJuYOVFQpQ8OI87l8DYwe30S-aGVWbde2Jt4cmHuXOSf47RawryFdI3lcI8az8mHjlB0mG5GY7TSXVX45eXnwIY3QCBBZbIfh_wdE95dyRcUsNuEdl_v5FiqMgPFbSVMxoDGYPipHQnn5_1v4jHaBnfyDoBr87D5nAZfZlj4qJD2-VgbKDKVg9gXZ7aTZjbviUpyzXTxcTHwm0Lig8hRAF7kwBFZtOG54JWLA=w1250-h273-no?authuser=0" alt="Amigo Ambev"></h2>
<h1 id="megahack---3ª-edição---time-3">MegaHack - 3ª Edição - Time 3</h1>
<h2 id="sobre-o-aplicativo-e-a-solução">Sobre o Aplicativo e a Solução:</h2>
<p>O Amgio ambev é um aplicativo Mobile, que tem como objetivo aproximar o consumidor final aos pontos de venda (Bares, depósitos e supermercados), atraves da interação do aplicativo e QR Code disponibilizados em latinhas, mesas e/ou Pontos de Vendas.</p>
<p>Visamos, que desta maneira o Amigo ambev incentive o consumidor final a comprar produtos ambev nos melhores lugares. Assim, retornando aos bares em um momento pós-pandemia.</p>
<h2 id="instalação-e-uso">Instalação e Uso:</h2>
<p>Para utilizar a primeira versão do Aplicativo é necessário ter o Expo, um FrameWork e plataforma pra aplicações React, instalado no dispositivo mobile.</p>
<p>Com o Git instalado no computador execute:</p>
<pre><code>git clone "link_deste_repositório"
</code></pre>
<p>ou baixe o repositório zipado.</p>
<p>Com o repositório em seu computador, basta executar:</p>
<pre><code>//Necessário NodeJs instalado no computador
npm install
//ou
yarn install
</code></pre>
<p>após isso, com o Expo no computador e no Celular, execute:</p>
<pre><code>expo start
</code></pre>
<p>Ele abrirá uma página do browser em seu localhost:19000, contendo um QR Code. Assim, escaneie o QR Code ou entre com o link <em>“exp://”</em> em caso de <em>iOS</em>.</p>
<h2 id="qr-code">QR CODE</h2>
<p><img src="https://lh3.googleusercontent.com/CXa1RKnWbKLIfoAqyZCEROI-7WpbBW0J8T-XldxFP9LyvwL_wYd2sIWsXY7EVZK4Wy8K8DBEycls3oGEiWhkLIRVCQxFl2YSovIGRDBVcQnn9eZ2Lf2FjvjQrxtsWRY3D1aBz1fV7e0WeunUoKHkx7RSRDAGLG3-QlZcuv7kCpsl0vxTKsMHOW-H9Pcic7xHMkbsx3GdNHai0FkGNBDbD_tI1Yt2IFbqBDsLx34LyxCLpDIloWFfitVrabHc47sxdAoA6h92AW5oG7RTDRYVMNUe64xMj9PRYOOhZJYR75eFjW_bbT021T4IXZWibo5sRhCqK0ubLx2HsEYBVCGIVaGVu6qM2p3-JNwn7AQhDRBIOlLV7C4t5-JFM4ua2Y1-pxPNctwQpJit2Bg1dwurAihi_-ihP8evkAGilcDKBofPl23DcQKTtDmAx--lIzuyo8RbKCH_bO2lZyw5FXLE5uPiqhgSXCyZ57CYO9nXECt4hr-i7yXBkXLZ8ERTy15OBKkzAFZkxoh_mLFtlwl9BYXBQNXMOaFIVTnlMQw8N_6UFfR4yIvCzbQrLgSFo87dObWhSmSzw0JIwkchC5451i9EM_xg_AJiksw4XOv06P0oe0GBcnrvppqKUo2_aBhSl1aSfSwCnNZVAKWaylcgqIOnz5eAma8fao-lzcIaSyDH6RpLKeO7UiGbivy51A=w611-h567-no?authuser=0" alt="QR Code"></p>
<pre><code>{"name":"Lorem Ipsum Vinhos","description":"Você ganhou 10 reais","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHhYmNfeRYHLjKlRhMhPlgYkkXPYfZPvVY3g&amp;usqp=CAU"}
</code></pre>
<p>Para a versão prototipada foi utilizado QRCode do estilo Text, que sera convertido em um Objeto JavaScrpit atraves do:<br>
JSON.parse( #QRCODE.DATA# ).</p>
<p>Visamos utilizar um servidor no back-end para gerenciar todas as validações e segurança dos Cupoms e AmbevPoints.</p>
<h2 id="equipe">Equipe:</h2>

<table>
<thead>
<tr>
<th>Nome</th>
<th>Cargo</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://github.com/mark-git-404">Marcos Gabriel</a></td>
<td>Engenharia/Desenvolvimento</td>
</tr>
<tr>
<td><a href="https://github.com/wilgnerl">Wilgner Lopes</a></td>
<td>Business</td>
</tr>
<tr>
<td>Maria Eduarda Giorgi</td>
<td>Business</td>
</tr>
<tr>
<td>Kaynan Santana</td>
<td>Marketing</td>
</tr>
<tr>
<td>Analice Costa</td>
<td>UI/UX</td>
</tr>
</tbody>
</table>
