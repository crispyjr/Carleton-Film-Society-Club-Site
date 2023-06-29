<script>
    import Calendar from '@event-calendar/core';
    import TimeGrid from '@event-calendar/time-grid';

    let ec;
    let plugins = [TimeGrid];
    let options = {
        view: 'timeGridWeek',
        eventSources: [{events: function() {
            console.log('fetching...');
            return [];
        }}]
    };


    function invokeMethod() {
        ec.refetchEvents();
    }
</script>


<div class="bg-zinc-800 text-white">
    <button on:click={invokeMethod}>Refetch events</button>
    <Calendar bind:this={ec} {plugins} {options} />
</div>
