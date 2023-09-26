<script lang="ts">
    import type { SuperValidated } from "sveltekit-superforms";
    import { z } from "zod";
    import { Root, Field } from "formsnap/dist/components";

    const schema = z.object({ x: z.string(), y: z.string() })
        // .refine(({ x, y }) => x === y, { message: 'x and y must be the same', path: ['secondName'] });
    let form: SuperValidated<typeof schema>;
</script>

<Root method="POST" {form} {schema} let:config>
    <Field {config} name="x" />
    <Field {config} name="y" />
</Root>