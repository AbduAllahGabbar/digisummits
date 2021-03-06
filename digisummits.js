const site = require('isite')({
    port: [80 , 33001],
    lang: 'ar',
    version : '1.0.12',
    name: 'digisummits',
    theme: 'theme_paper',
    mongodb: {
        db: 'smart_code_digi',
        limit: 100000,
        identity: {
            enabled: !1,
        },
    },
    security: {
        keys: ['e698f2679be5ba5c9c0b0031cb5b057c' , '9705a3a85c1b21118532fefcee840f99'],
      }
})

site.get({
    name: '/',
    path: site.dir + '/'
})

site.get({
    name: '/',
    path: __dirname +'/apps_digisummits/0/site_files/html/index.html',
    parser: 'html css js'
})


site.loadLocalApp('client-side')
site.importApps(__dirname + '/apps_digisummits')
site.importApp(__dirname + '/apps_private/security')
site.importApp(__dirname + '/apps_private/ui-print')
site.importApp(__dirname + '/apps_private/ui-help')

site.addFeature('digisummits')



site.run()
