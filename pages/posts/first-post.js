import { BuilderComponent, builder } from '@builder.io/react';

const BUILDER_API_KEY = '89f395af0d8f49b9a9333754919cbc21'
builder.init(BUILDER_API_KEY)

import '../../src/Heading1'

export const FirstPostPage = () => (
    <BuilderComponent model="heading1-test-model" />
)