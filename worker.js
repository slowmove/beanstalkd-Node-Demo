var bs = require('nodestalker'),
    client = bs.Client('0.0.0.0:11300'),
    tube = 'testChannel';

console.time("biglist");
client.watch(tube).onSuccess(function(data) {
    function resJob() {
        client.reserve().onSuccess(function(job) {
            console.log('reserved', job);

            client.deleteJob(job.id).onSuccess(function(del_msg) {
                console.log('deleted', job);
                console.log('message', del_msg);
                resJob();
                console.timeEnd("biglist");
            });
        });
    }

    resJob();
});