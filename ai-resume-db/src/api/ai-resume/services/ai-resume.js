'use strict';

/**
 * ai-resume service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ai-resume.ai-resume');
