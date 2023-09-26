<script lang="ts">
    import type { SuperValidated } from "sveltekit-superforms";
    import { z } from "zod";
    import { Form } from "formsnap";

    const schema = z.object({ x: z.string(), y: z.string() })
        // .refine(({ x, y }) => x === y, { message: 'x and y must be the same', path: ['secondName'] });
    let form: SuperValidated<typeof schema>;
</script>

<Form.Root method="POST" {form} {schema} let:config>
    <Form.Field {config} name="x" />
    <Form.Field {config} name="y" />
</Form.Root>
